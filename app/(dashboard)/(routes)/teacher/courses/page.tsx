import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

const CoursesPage = (props: Props) => {
  return (
    <div className="p">
      <Link href={`/teacher/create`}>
        <Button>New Course</Button>
      </Link>
    </div>
  );
};

export default CoursesPage;