import {
  ContributionDay,
  getGithubContributions,
  groupContributionsbyWeek,
} from "../lib/github";
import FadeIn from "./FadeIn";

const CELL = 13;
const GAP = 4;
const WEEK_STEP = CELL + GAP;

const levelColors = [
  "bg-green-600/[0.06] dark:bg-green-600/[0.08]",
  "bg-green-600/[0.26] dark:bg-green-600/[0.28]",
  "bg-green-600/[0.38] dark:bg-green-600/[0.42]",
  "bg-green-600/[0.54] dark:bg-green-600/[0.58]",
  "bg-green-600/[0.92] dark:bg-green-600/[0.96]",
];

function getMonthLabels(weeks: ContributionDay[][]) {
  const labels: { month: string; weekIndex: number }[] = [];
  let lastMonth = "";

  weeks.forEach((week, weekIndex) => {
    const firstDay = week.find((day) => day.date);
    if (!firstDay) return;

    const month = new Date(firstDay.date)
      .toLocaleString("en", { month: "short" })
      .toUpperCase();
    if (month === lastMonth) return;

    const lastIndex = labels[labels.length - 1]?.weekIndex ?? -4;
    if (weekIndex - lastIndex < 3) return;

    labels.push({ month, weekIndex });
    lastMonth = month;
  });

  return labels;
}

function getYearRange(contributions: { date: string }[]) {
  const dates = contributions
    .filter((d) => d.date)
    .map((d) => new Date(d.date));
  if (!dates.length) return "";

  const start = dates[0]!.getFullYear();
  const end = dates[dates.length - 1]!.getFullYear();
  const endShort = String(end).slice(2);

  return start === end ? `${start}` : `${start}–${endShort}`;
}

const GithubContr = async () => {
  const data = await getGithubContributions("AgnivaSengupta");
  if (!data) {
    return null
  }
  const weeks = await groupContributionsbyWeek(data.contributions);
  const total = data.total.lastYear;
  const monthLabels = getMonthLabels(weeks);
  const yearRange = getYearRange(data.contributions);
  const gridWidth = weeks.length * WEEK_STEP;
  return (
    <section className="py-10 max-w-2xl mx-auto">
      <FadeIn className="overflow-x-auto scrollbar-hide">
        <div className="relative mb-3 h-4 text-[11px] font-medium tracking-wider">
          {monthLabels.map(({ month, weekIndex }) => (
            <span
              key={`${month}-${weekIndex}`}
              className="absolute whitespace-nowrap"
              style={{ left: `${weekIndex * WEEK_STEP}px` }}
            >
              {month}
            </span>
          ))}
        </div>

        <div className="flex" style={{ gap: `${GAP}px` }}>
          {weeks.map((week, weekIndex) => (
            <div
              key={weekIndex}
              className="flex flex-col"
              style={{ gap: `${GAP}px` }}
            >
              {week.map((day, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  title={
                    day.date
                      ? `${day.count} contributions on ${day.date}`
                      : undefined
                  }
                  className={`rounded-[3px] ${
                    day.level < 0
                      ? "bg-transparent"
                      : (levelColors[day.level] ?? levelColors[0])
                  }`}
                  style={{ width: CELL, height: CELL }}
                />
              ))}
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

export default GithubContr;
