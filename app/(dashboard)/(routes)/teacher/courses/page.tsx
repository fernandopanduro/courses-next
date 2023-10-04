import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

type Props = {};

const CoursesPage = async (props: Props) => {
  const { userId } = auth();

  if (!userId) return redirect("/");

  const courses = await db.course.findMany({
    where: { userId },
    orderBy: {
      createdAt: "asc",
    },
  });

  return (
    <div className="p-6">
      <DataTable columns={columns} data={courses} />
    </div>
  );
};

export default CoursesPage;
