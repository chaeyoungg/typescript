import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import ListItem from "@/pages/community/ListItem";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

async function fetchPosts(type){
  const url = `https://api.fesp.shop/posts?type=${type}`;
  const res = await fetch(url);
  return res.json();
}

export default function List(){
  const { type } = useParams();

  const [data, setData] = useState([]);

  const fetchData = async (type) => {
    const result = await fetchPosts(type);
    setData(result.item);
  }

  useEffect(() => {
    fetchData(type);
  }, []);

  const list = data.map(item => <ListItem key={item._id} item={ item } />);

  return (
    <main className="min-w-80 p-10">
      <div className="text-center py-4">
        <h2 className="pb-4 text-2xl font-bold text-gray-700 dark:text-gray-200">정보 공유</h2>
      </div>
      <div className="flex justify-end mr-4">
        
        <Search />

        <a href="/info/new" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">글작성</a>
      </div>
      <section className="pt-10">
        <table className="border-collapse w-full table-fixed">
          <colgroup>
            <col className="w-[10%] sm:w-[10%]" />
            <col className="w-[60%] sm:w-[30%]" />
            <col className="w-[30%] sm:w-[15%]" />
            <col className="w-0 sm:w-[10%]" />
            <col className="w-0 sm:w-[10%]" />
            <col className="w-0 sm:w-[25%]" />
          </colgroup>
          <thead>
            <tr className="border-b border-solid border-gray-600">
              <th className="p-2 whitespace-nowrap font-semibold">번호</th>
              <th className="p-2 whitespace-nowrap font-semibold">제목</th>
              <th className="p-2 whitespace-nowrap font-semibold">글쓴이</th>
              <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">조회수</th>
              <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">댓글수</th>
              <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">작성일</th>
            </tr>
          </thead>
          <tbody>

            { list }

          </tbody>
        </table>
        <hr />

        <Pagination />

      </section>
    </main>
  );
}