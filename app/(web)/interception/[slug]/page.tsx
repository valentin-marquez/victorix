import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import InterceptionTeamList from "@/components/interception/interception-team-list";
import InterceptionSubmitTeamModal from "@/components/interception/interception-submit-team-modal";
import { Tables } from "@/lib/types/database.types";
import { Metadata } from "next";
import { Header } from "@/components/ui/header";

async function fetchBossData(slug: string): Promise<{
  boss: Tables<"bosses"> | null;
  teams: any[];
  versions: Tables<"game_versions">[] | [];
  userLikes: string[];
}> {
  const supabase = createClient();

  const { data: boss, error: bossError } = await supabase
    .from("bosses")
    .select("*")
    .eq("slug", slug)
    .single();

  if (bossError) throw bossError;

  const { data: teams, error: teamsError } = await supabase
    .from("interception_teams_with_votes_and_boss")
    .select("*")
    .eq("slug", slug);

  if (teamsError) throw teamsError;

  const teamsWithNikkes = await Promise.all(
    (teams || []).map(async (team) => {
      if (!team.team_id) return team;

      const { data: nikkes, error: nikkesError } = await supabase
        .from("interception_team_nikke_details")
        .select("*")
        .eq("team_id", team.team_id);

      if (nikkesError) throw nikkesError;

      return { ...team, nikkes: nikkes || [] };
    })
  );

  const { data: versions, error: versionsError } = await supabase
    .from("game_versions")
    .select("*")
    .order("release_date", { ascending: false });

  if (versionsError) throw versionsError;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let userLikes: string[] = [];
  if (user) {
    const { data: likes, error: likesError } = await supabase
      .from("user_likes")
      .select("team_id")
      .eq("user_id", user.id);

    if (likesError) throw likesError;
    userLikes = likes.map((like) => like.team_id);
  }

  return {
    boss: (boss as Tables<"bosses">) || null,
    teams: teamsWithNikkes,
    versions: (versions as Tables<"game_versions">[]) || [],
    userLikes,
  };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  const { boss } = await fetchBossData(slug);

  return {
    title: `${
      boss?.name || "Interception Boss"
    } Guide - Arkz | Nikke: Goddess of Victory`,
    description: `Defeat ${
      boss?.name || "this boss"
    } in the Interception mode of Nikke: Goddess of Victory. Learn the best strategies, team compositions, and tips to conquer ${
      boss?.name || "this challenging boss"
    }.`,
  };
}

export default async function InterceptionBossPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { boss, teams, versions, userLikes } = await fetchBossData(slug);

  if (!boss) {
    return <div>Boss not found.</div>;
  }

  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/interception", label: "Interception" },
    { label: boss.name },
  ];

  console.log("Mode Id: ", boss.mode_id);
  return (
    <main className="flex-1 relative space-y-4">
      <Header
        breadcrumbs={breadcrumbs}
        title={boss.name}
        subtitle="Interception Boss"
      />
      <Card className="container mx-auto w-full p-0">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Teams</CardTitle>
          <InterceptionSubmitTeamModal
            modeId={boss.mode_id || ""}
            modeName="Interception"
            boss={boss}
            versions={versions}
          />
        </CardHeader>
        <CardContent className="p-4 pt-0 xl:p-6">
          <InterceptionTeamList
            initialTeams={teams}
            versions={versions}
            boss={boss}
            initialUserLikes={userLikes}
          />
        </CardContent>
      </Card>
    </main>
  );
}
