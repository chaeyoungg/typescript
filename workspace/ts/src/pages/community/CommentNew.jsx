import InputError from "@/components/InputError";
import Submit from "@/components/Submit";
import { userState } from "@/recoil/user/atoms";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

const SERVER = import.meta.env.VITE_API_SERVER;

async function addComment(postId, formData, accessToken) {
  const res = await fetch(`${SERVER}/posts/${postId}/replies`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(formData),
  });
  return res.json();
}

export default function CommentNew() {
  const queryClient = useQueryClient();
  const user = useRecoilValue(userState);
  const { type, _id } = useParams();
  const { mutate } = useMutation({
    // mutate는 mutationFn 작업을 실행하는 함수
    // mutation은 fetch로 비동기 데이터를 받아오는 함수
    // handleSubmit에서 mutate함수를 매개변수로 넘겨준다.
    mutationFn(formData) {
      return addComment(_id, formData, user?.accessToken);
    },
    onSuccess(resData) {
      // 잘 실행되었을 때 onSuccess가 호출
      if (resData.ok) {
        console.log("댓글 실행됨~", resData);
        queryClient.invalidateQueries({
          queryKey: [type, _id, "replies"], //저장된 댓글 데이터 삭제
        }); // 캐시 제거하겠다는 의미! - 즉, 새로운 데이터를 가져오겠당
      } else {
        console.error(resData.message);
      }
    },
    onError(err) {
      console.error(err);
    },
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h4 className="mb-4">새로운 댓글을 추가하세요.</h4>
      <form action="#" onSubmit={handleSubmit(mutate)}>
        <div className="mb-4">
          <textarea
            rows="3"
            cols="40"
            className="block p-2 w-full text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="내용을 입력하세요."
            {...register("content", {
              required: "내용은 필수 입력값입니다. ",
              minLength: "두 글자 이상 입력하세요. ",
            })}
          ></textarea>
          <InputError target={errors.content} />

          <p className="ml-2 mt-1 text-sm text-red-500">내용은 필수입니다.</p>
        </div>
        <Submit size="sm">댓글 등록</Submit>
      </form>
    </div>
  );
}
