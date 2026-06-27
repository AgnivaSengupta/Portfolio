export type ContributionDay = {
  date: string;
  count: number;
  level: number;
}

export type GithubContributions = {
  total: { lastYear: number };
  contributions: ContributionDay;
}

export const getGithubContributions = async (username: string): Promise<GithubContributions| null >=> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return null;
    return res.json();
  } catch (errror) {
    return null;
  }
}


export const groupContributionsbyWeek = async (contributions: ContributionDay[]) => {
  const weeks: ContributionDay[][] = [];
  let week: ContributionDay[] = []

  if (contributions) {
    contributions.forEach((day, index) => {
      if (index == 0) {
        const pad = new Date(day.date).getDay()
        for (let i = 0; i < pad; i++) {
          week.push({ date: "", count: 0, level: -1 });
        }
      }
  
      week.push(day);
  
      if (week.length === 7) {
        weeks.push(week)
        week = []
      }
    });
  }
  

  if (week.length) weeks.push(week);
  return weeks;
}