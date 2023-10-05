import { db } from "@/lib/db";

export const getProgress = async (
  userId: string,
  courseId: string
): Promise<number> => {
  try {
    const publishedChapters = await db.chapter.findMany({
      where: { courseId: courseId, isPublished: true },
      select: {
        id: true,
      },
    });

    const punlishedChapterIds = publishedChapters.map(chapter => chapter.id);

    const validCompletedChapter = await db.userProgress.count({
      where: {
        userId: userId,
        chapterId: {
          in: punlishedChapterIds,
        },
        isCompleted: true,
      },
    });

    const progressPercentage =
      (validCompletedChapter / publishedChapters.length) * 100;

    return progressPercentage;
  } catch (error) {
    console.log("GET_PROGRESS", error);
    return 0;
  }
};
