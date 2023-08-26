"use client";

import { useRouter } from "next/navigation";
import { FiArrowLeft as BackIcon } from "react-icons/fi";

interface PageHeaderProps {
  title: string;
  isBackButton?: boolean;
}

const PageHeader = ({ title, isBackButton = false }: PageHeaderProps) => {
  const router = useRouter();

  return (
    <div className="flex gap-5 items-center pt-8 px-8 pb-16">
      {isBackButton && (
        <div
          className="absolute bg-white rounded-full p-2 cursor-pointer"
          onClick={() => router.back()}
        >
          <BackIcon size={20} />
        </div>
      )}
      <div className="flex-grow text-center font-medium">{title}</div>
    </div>
  );
};

export default PageHeader;
