import SearchInput from "@/components/search-input";
import { db } from "@/lib/db";
import Categories from "./_components/categories";

type Props = {};

const SearchPage = async (props: Props) => {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <>
      <div className="px-6 pt-6 md:hidden block">
        <SearchInput />
      </div>
      <div className="p-6">
        <Categories items={categories} />
      </div>
    </>
  );
};

export default SearchPage;
