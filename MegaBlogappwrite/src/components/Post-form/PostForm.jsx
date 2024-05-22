import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Select, RTE, Input } from "../index";
import { useDispatch, useSelector } from "react-redux";
import appwriteService from "../../appWrite/config";
import { useNavigate } from "react-router-dom";
import authSlice from "../../Store/authSlice";

export default function PostForm({ post }) {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const { register, setValue, handleSubmit, watch, control, getValues } =
    useForm({
      defaultValues,
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post.status || "active",
    });
  const submit = async (data) => {
    //? Creating a Submit form
    if (post) {
      //? Here we are checking if user is creating or updating a file.

      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        //? If file is present now we need to delete the old file
        appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        //? Updatind the Post as we updated the Image
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      //? if new post
      const file = await appwriteService.uploadFile(data.image[0]);
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
    const slugTransform = useCallback((value) => {
      if (value && typeof value == String) {
        return value.trim().ToLowerCase().replace(/\s+/g, "-");
      }
      return "";
    }, []);

    useEffect(() => {
      const subscription = watch((value, { name }) => {
        if (name == "title") {
          setValue(
            "slug",
            slugTransform(value.title, { shouldValidate: true })
          );
        }
      });
      return () => {
        subscription.unsubscribe();
      };
    }, [watch, setValue, slugTransform]);
    return (
      <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
        <div className="w-2/3 px-2">
          <Input
            label="Title :"
            placeholder="Title"
            className="mb-4"
            {...register("title", { required: true })}
          />
          <Input
            label="Slug :"
            placeholder="Slug"
            className="mb-4"
            {...register("slug", { required: true })}
            onInput={(e) => {
              setValue("slug", slugTransform(e.currentTarget.value), {
                shouldValidate: true,
              });
            }}
          />
          <RTE
            label="Content :"
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>
        <div className="w-1/3 px-2">
          <Input
            label="Featured Image :"
            type="file"
            className="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
          />
          {post && (
            <div className="w-full mb-4">
              <img
                src={appwriteService.getFilePreview(post.featuredImage)}
                alt={post.title}
                className="rounded-lg"
              />
            </div>
          )}
          <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-4"
            {...register("status", { required: true })}
          />
          <Button
            type="submit"
            bgColor={post ? "bg-green-500" : undefined}
            className="w-full"
          >
            {post ? "Update" : "Submit"}
          </Button>
        </div>
      </form>
    );
  };
}
