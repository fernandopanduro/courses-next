import IconBadge from "@/components/icon-badge";
import { LucideIcon } from "lucide-react";

type InfoCardProps = {
  variant?: "default" | "success";
  icon: LucideIcon;
  label: string;
  numberOfItems: number;
};

const InfoCard = ({
  icon: Icon,
  label,
  numberOfItems,
  variant,
}: InfoCardProps) => {
  return (
    <div className="border rounded-md flex items-center gap-x-2 p-3">
      <IconBadge icon={Icon} variant={variant} />
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-gray-500 text-sm">
          {numberOfItems} {numberOfItems === 1 ? "Course" : "Courses"}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
