import { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";
import { Database } from "@/lib/types/database.types";
import Loading from "@/components/ui/loading";
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

type Boss = Database["bosses"];
type InterceptionTeam = Database["interception_teams_with_votes"];
type GameVersion = Database["game_versions"];

async function fetchBossData(slug: string): Promise<{
  boss: Boss | null;
  teams: InterceptionTeam[];
  versions: GameVersion[];
}> {
  const supabase = createClient();

  const { data: boss, error: bossError } = await supabase
    .from("bosses")
    .select("*")
    .eq("slug", slug)
    .single();

  const { data: teams, error: teamsError } = await supabase
    .from("interception_teams_with_votes_and_boss")
    .select("*")
    .eq("slug", slug);

  const { data: versions, error: versionsError } = await supabase
    .from("game_versions")
    .select("*")
    .order("release_date", { ascending: false });

  if (bossError || teamsError || versionsError) {
    throw new Error("Error fetching data");
  }

  return {
    boss: boss || null,
    teams: teams || [],
    versions: versions || [],
  };
}

export default async function InterceptionBossPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { boss, teams, versions } = await fetchBossData(slug);

  if (!boss) {
    return <div>Boss not found.</div>;
  }

  return (
    <main className="flex-1 relative space-y-4">
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-col w-full">
          <Breadcrumb className="px-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/interception">
                  Interception
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="capitalize font-bold">
                  {boss.name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="px-8 flex flex-wrap flex-col">
            <h1 className="text-2xl">{boss.name}</h1>
            <p className="text-muted-foreground mt-0 capitalize text-sm">
              Interception Boss
            </p>
          </div>
        </div>
      </div>

      <Separator />

      <Card className="container mx-auto w-full p-0">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Teams</CardTitle>
          <InterceptionSubmitTeamModal
            modeId={boss.mode_id || ""}
            modeName="Interception"
            bosses={[boss]}
            versions={versions}
          />
        </CardHeader>
        <CardContent className="p-4 pt-0 xl:p-6">
          <Suspense fallback={<Loading />}>
            <InterceptionTeamList initialTeams={teams} versions={versions} />
          </Suspense>
        </CardContent>
      </Card>
    </main>
  );
}
