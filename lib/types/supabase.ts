export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      anomaly_interception_team_nikkes: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          id: string
          nikke_id: string | null
          position: number
          team_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          nikke_id?: string | null
          position: number
          team_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          nikke_id?: string | null
          position?: number
          team_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "anomaly_interception_team_nikkes_nikke_id_fkey"
            columns: ["nikke_id"]
            isOneToOne: false
            referencedRelation: "nikkes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "anomaly_interception_team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "anomaly_interception_teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "anomaly_interception_team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "anomaly_interception_teams_with_votes_and_boss"
            referencedColumns: ["team_id"]
          },
        ]
      }
      anomaly_interception_teams: {
        Row: {
          boss_id: string | null
          comment: string | null
          created_at: string | null
          deleted_at: string | null
          game_version_id: string | null
          id: string
          mode_id: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          boss_id?: string | null
          comment?: string | null
          created_at?: string | null
          deleted_at?: string | null
          game_version_id?: string | null
          id?: string
          mode_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          boss_id?: string | null
          comment?: string | null
          created_at?: string | null
          deleted_at?: string | null
          game_version_id?: string | null
          id?: string
          mode_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "anomaly_interception_teams_boss_id_fkey"
            columns: ["boss_id"]
            isOneToOne: false
            referencedRelation: "bosses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "anomaly_interception_teams_game_version_id_fkey"
            columns: ["game_version_id"]
            isOneToOne: false
            referencedRelation: "game_versions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "anomaly_interception_teams_mode_id_fkey"
            columns: ["mode_id"]
            isOneToOne: false
            referencedRelation: "modes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "anomaly_interception_teams_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      bosses: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          description: string | null
          element: string | null
          id: string
          image_url: string | null
          mode_id: string | null
          mode_type: string | null
          name: string
          slug: string | null
          updated_at: string | null
          weak_element: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          description?: string | null
          element?: string | null
          id?: string
          image_url?: string | null
          mode_id?: string | null
          mode_type?: string | null
          name: string
          slug?: string | null
          updated_at?: string | null
          weak_element?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          description?: string | null
          element?: string | null
          id?: string
          image_url?: string | null
          mode_id?: string | null
          mode_type?: string | null
          name?: string
          slug?: string | null
          updated_at?: string | null
          weak_element?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bosses_mode_id_fkey"
            columns: ["mode_id"]
            isOneToOne: false
            referencedRelation: "modes"
            referencedColumns: ["id"]
          },
        ]
      }
      chapter_teams: {
        Row: {
          chapter_id: string | null
          created_at: string | null
          deleted_at: string | null
          id: string
          team_id: string | null
          updated_at: string | null
        }
        Insert: {
          chapter_id?: string | null
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          team_id?: string | null
          updated_at?: string | null
        }
        Update: {
          chapter_id?: string | null
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          team_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chapter_teams_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "chapters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chapter_teams_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chapter_teams_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams_with_chapter_votes"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "chapter_teams_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams_with_votes"
            referencedColumns: ["team_id"]
          },
        ]
      }
      chapters: {
        Row: {
          chapter_number: number
          created_at: string | null
          deleted_at: string | null
          difficulty: string
          id: string
          image_path: string
          mode_id: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          chapter_number: number
          created_at?: string | null
          deleted_at?: string | null
          difficulty: string
          id?: string
          image_path: string
          mode_id?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          chapter_number?: number
          created_at?: string | null
          deleted_at?: string | null
          difficulty?: string
          id?: string
          image_path?: string
          mode_id?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chapters_mode_id_fkey"
            columns: ["mode_id"]
            isOneToOne: false
            referencedRelation: "modes"
            referencedColumns: ["id"]
          },
        ]
      }
      game_events: {
        Row: {
          color: string
          end_date: string
          id: string
          image_path: string
          importance: number
          start_date: string
          title: string
        }
        Insert: {
          color: string
          end_date: string
          id?: string
          image_path: string
          importance: number
          start_date: string
          title: string
        }
        Update: {
          color?: string
          end_date?: string
          id?: string
          image_path?: string
          importance?: number
          start_date?: string
          title?: string
        }
        Relationships: []
      }
      game_versions: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          id: string
          release_date: string | null
          updated_at: string | null
          version: string
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          release_date?: string | null
          updated_at?: string | null
          version: string
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          release_date?: string | null
          updated_at?: string | null
          version?: string
        }
        Relationships: []
      }
      interception_team_nikkes: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          id: string
          nikke_id: string | null
          position: number
          team_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          nikke_id?: string | null
          position: number
          team_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          nikke_id?: string | null
          position?: number
          team_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "interception_team_nikkes_nikke_id_fkey"
            columns: ["nikke_id"]
            isOneToOne: false
            referencedRelation: "nikkes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interception_team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "interception_teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interception_team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "interception_teams_with_votes"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "interception_team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "interception_teams_with_votes_and_boss"
            referencedColumns: ["team_id"]
          },
        ]
      }
      interception_teams: {
        Row: {
          boss_id: string | null
          comment: string | null
          created_at: string | null
          deleted_at: string | null
          game_version_id: string | null
          id: string
          mode_id: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          boss_id?: string | null
          comment?: string | null
          created_at?: string | null
          deleted_at?: string | null
          game_version_id?: string | null
          id?: string
          mode_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          boss_id?: string | null
          comment?: string | null
          created_at?: string | null
          deleted_at?: string | null
          game_version_id?: string | null
          id?: string
          mode_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "interception_teams_boss_id_fkey"
            columns: ["boss_id"]
            isOneToOne: false
            referencedRelation: "bosses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interception_teams_game_version_id_fkey"
            columns: ["game_version_id"]
            isOneToOne: false
            referencedRelation: "game_versions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interception_teams_mode_id_fkey"
            columns: ["mode_id"]
            isOneToOne: false
            referencedRelation: "modes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interception_teams_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      modes: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          description: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          description?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          description?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      nikkes: {
        Row: {
          burst: string
          created_at: string | null
          deleted_at: string | null
          element: string
          full_image_url: string
          icon_url: string
          id: string
          manufacturer: string
          name: string
          rarity: string
          slug: string
          updated_at: string | null
          version_id: string
          weapon_type: string
        }
        Insert: {
          burst: string
          created_at?: string | null
          deleted_at?: string | null
          element: string
          full_image_url: string
          icon_url: string
          id?: string
          manufacturer: string
          name: string
          rarity: string
          slug: string
          updated_at?: string | null
          version_id: string
          weapon_type: string
        }
        Update: {
          burst?: string
          created_at?: string | null
          deleted_at?: string | null
          element?: string
          full_image_url?: string
          icon_url?: string
          id?: string
          manufacturer?: string
          name?: string
          rarity?: string
          slug?: string
          updated_at?: string | null
          version_id?: string
          weapon_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_nikkes_version"
            columns: ["version_id"]
            isOneToOne: false
            referencedRelation: "game_versions"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          deleted_at: string | null
          id: string
          is_admin: boolean | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          deleted_at?: string | null
          id: string
          is_admin?: boolean | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          is_admin?: boolean | null
          updated_at?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      short_urls: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          id: string
          mode: string
          short_code: string
          team_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          mode: string
          short_code: string
          team_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          mode?: string
          short_code?: string
          team_id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      solo_raid_seasons: {
        Row: {
          boss_id: string
          created_at: string | null
          deleted_at: string | null
          end_date: string
          id: string
          name: string
          slug: string
          start_date: string
          updated_at: string | null
        }
        Insert: {
          boss_id: string
          created_at?: string | null
          deleted_at?: string | null
          end_date: string
          id?: string
          name: string
          slug: string
          start_date: string
          updated_at?: string | null
        }
        Update: {
          boss_id?: string
          created_at?: string | null
          deleted_at?: string | null
          end_date?: string
          id?: string
          name?: string
          slug?: string
          start_date?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "solo_raid_seasons_boss_id_fkey"
            columns: ["boss_id"]
            isOneToOne: false
            referencedRelation: "bosses"
            referencedColumns: ["id"]
          },
        ]
      }
      solo_raid_team_nikkes: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          id: string
          nikke_id: string
          position: number
          team_id: string
          team_number: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          nikke_id: string
          position: number
          team_id: string
          team_number: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          nikke_id?: string
          position?: number
          team_id?: string
          team_number?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "solo_raid_team_nikkes_nikke_id_fkey"
            columns: ["nikke_id"]
            isOneToOne: false
            referencedRelation: "nikkes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "solo_raid_team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "solo_raid_teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "solo_raid_team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "solo_raid_teams_with_votes_and_season"
            referencedColumns: ["team_id"]
          },
        ]
      }
      solo_raid_teams: {
        Row: {
          comment: string | null
          created_at: string | null
          deleted_at: string | null
          game_version_id: string | null
          id: string
          season_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          deleted_at?: string | null
          game_version_id?: string | null
          id?: string
          season_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          deleted_at?: string | null
          game_version_id?: string | null
          id?: string
          season_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "solo_raid_teams_game_version_id_fkey"
            columns: ["game_version_id"]
            isOneToOne: false
            referencedRelation: "game_versions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "solo_raid_teams_season_id_fkey"
            columns: ["season_id"]
            isOneToOne: false
            referencedRelation: "solo_raid_seasons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "solo_raid_teams_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      special_arena_teams: {
        Row: {
          attack_team_ids: string[]
          created_at: string | null
          defense_team_ids: string[]
          deleted_at: string | null
          id: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          attack_team_ids: string[]
          created_at?: string | null
          defense_team_ids: string[]
          deleted_at?: string | null
          id?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          attack_team_ids?: string[]
          created_at?: string | null
          defense_team_ids?: string[]
          deleted_at?: string | null
          id?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "special_arena_teams_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      table_analytics: {
        Row: {
          id: number
          operated_at: string | null
          operation: string
          table_name: string
          user_id: string | null
        }
        Insert: {
          id?: number
          operated_at?: string | null
          operation: string
          table_name: string
          user_id?: string | null
        }
        Update: {
          id?: number
          operated_at?: string | null
          operation?: string
          table_name?: string
          user_id?: string | null
        }
        Relationships: []
      }
      team_nikkes: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          id: string
          nikke_id: string | null
          position: number
          team_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          nikke_id?: string | null
          position: number
          team_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          nikke_id?: string | null
          position?: number
          team_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_nikkes_nikke_id_fkey"
            columns: ["nikke_id"]
            isOneToOne: false
            referencedRelation: "nikkes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams_with_chapter_votes"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams_with_votes"
            referencedColumns: ["team_id"]
          },
        ]
      }
      teams: {
        Row: {
          comment: string | null
          created_at: string | null
          deleted_at: string | null
          game_version_id: string | null
          id: string
          mode_id: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          deleted_at?: string | null
          game_version_id?: string | null
          id?: string
          mode_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          deleted_at?: string | null
          game_version_id?: string | null
          id?: string
          mode_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teams_game_version_id_fkey"
            columns: ["game_version_id"]
            isOneToOne: false
            referencedRelation: "game_versions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teams_mode_id_fkey"
            columns: ["mode_id"]
            isOneToOne: false
            referencedRelation: "modes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teams_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      tower_levels: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          id: string
          level: number
          manufacturer: string | null
          mode_id: string | null
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          level: number
          manufacturer?: string | null
          mode_id?: string | null
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          level?: number
          manufacturer?: string | null
          mode_id?: string | null
          name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tower_levels_mode_id_fkey"
            columns: ["mode_id"]
            isOneToOne: false
            referencedRelation: "modes"
            referencedColumns: ["id"]
          },
        ]
      }
      tribe_tower_team_nikkes: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          id: string
          nikke_id: string | null
          position: number
          team_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          nikke_id?: string | null
          position: number
          team_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          nikke_id?: string | null
          position?: number
          team_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tribe_tower_team_nikkes_nikke_id_fkey"
            columns: ["nikke_id"]
            isOneToOne: false
            referencedRelation: "nikkes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tribe_tower_team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "tribe_tower_teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tribe_tower_team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "tribe_tower_teams_detailed"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tribe_tower_team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "tribe_tower_teams_with_votes"
            referencedColumns: ["team_id"]
          },
        ]
      }
      tribe_tower_teams: {
        Row: {
          comment: string | null
          created_at: string | null
          deleted_at: string | null
          floor: number
          game_version_id: string | null
          id: string
          tower_id: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          deleted_at?: string | null
          floor: number
          game_version_id?: string | null
          id?: string
          tower_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          deleted_at?: string | null
          floor?: number
          game_version_id?: string | null
          id?: string
          tower_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tribe_tower_teams_game_version_id_fkey"
            columns: ["game_version_id"]
            isOneToOne: false
            referencedRelation: "game_versions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tribe_tower_teams_tower_id_fkey"
            columns: ["tower_id"]
            isOneToOne: false
            referencedRelation: "tribe_towers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tribe_tower_teams_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      tribe_towers: {
        Row: {
          available_days: string[]
          created_at: string | null
          deleted_at: string | null
          id: string
          is_always_available: boolean
          manufacturer: string | null
          max_floors: number
          name: string
          reset_day: number | null
          reset_hour: string
          updated_at: string | null
        }
        Insert: {
          available_days: string[]
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          is_always_available?: boolean
          manufacturer?: string | null
          max_floors: number
          name: string
          reset_day?: number | null
          reset_hour?: string
          updated_at?: string | null
        }
        Update: {
          available_days?: string[]
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          is_always_available?: boolean
          manufacturer?: string | null
          max_floors?: number
          name?: string
          reset_day?: number | null
          reset_hour?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      user_likes: {
        Row: {
          created_at: string | null
          id: string
          team_id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          team_id: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          team_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      votes: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          id: string
          team_id: string | null
          updated_at: string | null
          user_id: string | null
          vote: number
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          team_id?: string | null
          updated_at?: string | null
          user_id?: string | null
          vote: number
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          team_id?: string | null
          updated_at?: string | null
          user_id?: string | null
          vote?: number
        }
        Relationships: [
          {
            foreignKeyName: "votes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams_with_chapter_votes"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "votes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams_with_votes"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      anomaly_interception_team_nikke_details: {
        Row: {
          burst: string | null
          element: string | null
          full_image_url: string | null
          icon_url: string | null
          manufacturer: string | null
          name: string | null
          nikke_id: string | null
          position: number | null
          rarity: string | null
          slug: string | null
          team_id: string | null
          team_nikke_id: string | null
          weapon_type: string | null
        }
        Relationships: [
          {
            foreignKeyName: "anomaly_interception_team_nikkes_nikke_id_fkey"
            columns: ["nikke_id"]
            isOneToOne: false
            referencedRelation: "nikkes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "anomaly_interception_team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "anomaly_interception_teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "anomaly_interception_team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "anomaly_interception_teams_with_votes_and_boss"
            referencedColumns: ["team_id"]
          },
        ]
      }
      anomaly_interception_teams_with_votes_and_boss: {
        Row: {
          avatar_url: string | null
          boss_id: string | null
          comment: string | null
          created_at: string | null
          description: string | null
          element: string | null
          game_version_id: string | null
          image_url: string | null
          mode_id: string | null
          name: string | null
          slug: string | null
          team_id: string | null
          total_votes: number | null
          user_id: string | null
          username: string | null
          weak_element: string | null
        }
        Relationships: [
          {
            foreignKeyName: "anomaly_interception_teams_boss_id_fkey"
            columns: ["boss_id"]
            isOneToOne: false
            referencedRelation: "bosses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "anomaly_interception_teams_game_version_id_fkey"
            columns: ["game_version_id"]
            isOneToOne: false
            referencedRelation: "game_versions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "anomaly_interception_teams_mode_id_fkey"
            columns: ["mode_id"]
            isOneToOne: false
            referencedRelation: "modes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "anomaly_interception_teams_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      interception_team_nikke_details: {
        Row: {
          burst: string | null
          element: string | null
          full_image_url: string | null
          icon_url: string | null
          manufacturer: string | null
          name: string | null
          nikke_id: string | null
          position: number | null
          rarity: string | null
          slug: string | null
          team_id: string | null
          team_nikke_id: string | null
          weapon_type: string | null
        }
        Relationships: [
          {
            foreignKeyName: "interception_team_nikkes_nikke_id_fkey"
            columns: ["nikke_id"]
            isOneToOne: false
            referencedRelation: "nikkes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interception_team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "interception_teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interception_team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "interception_teams_with_votes"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "interception_team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "interception_teams_with_votes_and_boss"
            referencedColumns: ["team_id"]
          },
        ]
      }
      interception_teams_with_votes: {
        Row: {
          avatar_url: string | null
          boss_id: string | null
          comment: string | null
          created_at: string | null
          game_version_id: string | null
          mode_id: string | null
          team_id: string | null
          total_votes: number | null
          user_id: string | null
          username: string | null
        }
        Relationships: [
          {
            foreignKeyName: "interception_teams_boss_id_fkey"
            columns: ["boss_id"]
            isOneToOne: false
            referencedRelation: "bosses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interception_teams_game_version_id_fkey"
            columns: ["game_version_id"]
            isOneToOne: false
            referencedRelation: "game_versions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interception_teams_mode_id_fkey"
            columns: ["mode_id"]
            isOneToOne: false
            referencedRelation: "modes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interception_teams_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      interception_teams_with_votes_and_boss: {
        Row: {
          avatar_url: string | null
          boss_id: string | null
          comment: string | null
          created_at: string | null
          description: string | null
          element: string | null
          game_version_id: string | null
          image_url: string | null
          mode_id: string | null
          name: string | null
          slug: string | null
          team_id: string | null
          total_votes: number | null
          user_id: string | null
          username: string | null
          weak_element: string | null
        }
        Relationships: [
          {
            foreignKeyName: "interception_teams_boss_id_fkey"
            columns: ["boss_id"]
            isOneToOne: false
            referencedRelation: "bosses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interception_teams_game_version_id_fkey"
            columns: ["game_version_id"]
            isOneToOne: false
            referencedRelation: "game_versions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interception_teams_mode_id_fkey"
            columns: ["mode_id"]
            isOneToOne: false
            referencedRelation: "modes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interception_teams_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      solo_raid_team_nikke_details: {
        Row: {
          burst: string | null
          element: string | null
          full_image_url: string | null
          icon_url: string | null
          manufacturer: string | null
          name: string | null
          nikke_id: string | null
          position: number | null
          rarity: string | null
          slug: string | null
          team_id: string | null
          team_nikke_id: string | null
          team_number: number | null
          weapon_type: string | null
        }
        Relationships: [
          {
            foreignKeyName: "solo_raid_team_nikkes_nikke_id_fkey"
            columns: ["nikke_id"]
            isOneToOne: false
            referencedRelation: "nikkes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "solo_raid_team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "solo_raid_teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "solo_raid_team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "solo_raid_teams_with_votes_and_season"
            referencedColumns: ["team_id"]
          },
        ]
      }
      solo_raid_teams_with_votes_and_season: {
        Row: {
          avatar_url: string | null
          boss_description: string | null
          boss_element: string | null
          boss_image_url: string | null
          boss_name: string | null
          boss_weak_element: string | null
          comment: string | null
          created_at: string | null
          game_version_id: string | null
          season_id: string | null
          season_name: string | null
          season_slug: string | null
          team_id: string | null
          total_votes: number | null
          user_id: string | null
          username: string | null
        }
        Relationships: [
          {
            foreignKeyName: "solo_raid_teams_game_version_id_fkey"
            columns: ["game_version_id"]
            isOneToOne: false
            referencedRelation: "game_versions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "solo_raid_teams_season_id_fkey"
            columns: ["season_id"]
            isOneToOne: false
            referencedRelation: "solo_raid_seasons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "solo_raid_teams_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      team_nikke_details: {
        Row: {
          burst: string | null
          element: string | null
          full_image_url: string | null
          icon_url: string | null
          manufacturer: string | null
          name: string | null
          nikke_id: string | null
          position: number | null
          rarity: string | null
          slug: string | null
          team_id: string | null
          team_nikke_id: string | null
          weapon_type: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_nikkes_nikke_id_fkey"
            columns: ["nikke_id"]
            isOneToOne: false
            referencedRelation: "nikkes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams_with_chapter_votes"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams_with_votes"
            referencedColumns: ["team_id"]
          },
        ]
      }
      teams_with_chapter_votes: {
        Row: {
          avatar_url: string | null
          chapter_id: string | null
          chapter_number: number | null
          comment: string | null
          created_at: string | null
          difficulty: string | null
          game_version_id: string | null
          mode_id: string | null
          team_id: string | null
          title: string | null
          total_votes: number | null
          user_id: string | null
          username: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chapter_teams_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "chapters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teams_game_version_id_fkey"
            columns: ["game_version_id"]
            isOneToOne: false
            referencedRelation: "game_versions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teams_mode_id_fkey"
            columns: ["mode_id"]
            isOneToOne: false
            referencedRelation: "modes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teams_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      teams_with_votes: {
        Row: {
          comment: string | null
          created_at: string | null
          game_version_id: string | null
          mode_id: string | null
          team_id: string | null
          total_votes: number | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teams_game_version_id_fkey"
            columns: ["game_version_id"]
            isOneToOne: false
            referencedRelation: "game_versions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teams_mode_id_fkey"
            columns: ["mode_id"]
            isOneToOne: false
            referencedRelation: "modes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teams_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      tribe_tower_team_nikke_details: {
        Row: {
          burst: string | null
          element: string | null
          full_image_url: string | null
          icon_url: string | null
          manufacturer: string | null
          name: string | null
          nikke_id: string | null
          position: number | null
          rarity: string | null
          slug: string | null
          team_id: string | null
          team_nikke_id: string | null
          weapon_type: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tribe_tower_team_nikkes_nikke_id_fkey"
            columns: ["nikke_id"]
            isOneToOne: false
            referencedRelation: "nikkes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tribe_tower_team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "tribe_tower_teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tribe_tower_team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "tribe_tower_teams_detailed"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tribe_tower_team_nikkes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "tribe_tower_teams_with_votes"
            referencedColumns: ["team_id"]
          },
        ]
      }
      tribe_tower_teams_detailed: {
        Row: {
          avatar_url: string | null
          comment: string | null
          created_at: string | null
          floor: number | null
          game_version: string | null
          game_version_id: string | null
          team_id: string | null
          total_votes: number | null
          tower_id: string | null
          tower_manufacturer: string | null
          tower_name: string | null
          user_id: string | null
          username: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tribe_tower_teams_game_version_id_fkey"
            columns: ["game_version_id"]
            isOneToOne: false
            referencedRelation: "game_versions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tribe_tower_teams_tower_id_fkey"
            columns: ["tower_id"]
            isOneToOne: false
            referencedRelation: "tribe_towers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tribe_tower_teams_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      tribe_tower_teams_with_votes: {
        Row: {
          avatar_url: string | null
          comment: string | null
          created_at: string | null
          floor: number | null
          game_version_id: string | null
          team_id: string | null
          total_votes: number | null
          tower_id: string | null
          tower_manufacturer: string | null
          tower_name: string | null
          user_id: string | null
          username: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tribe_tower_teams_game_version_id_fkey"
            columns: ["game_version_id"]
            isOneToOne: false
            referencedRelation: "game_versions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tribe_tower_teams_tower_id_fkey"
            columns: ["tower_id"]
            isOneToOne: false
            referencedRelation: "tribe_towers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tribe_tower_teams_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      add_formal_columns: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      create_short_url_for_team: {
        Args: {
          p_team_id: string
          p_mode: string
        }
        Returns: string
      }
      generate_slug: {
        Args: {
          "": string
        }
        Returns: string
      }
      get_available_towers: {
        Args: Record<PropertyKey, never>
        Returns: {
          available_days: string[]
          created_at: string | null
          deleted_at: string | null
          id: string
          is_always_available: boolean
          manufacturer: string | null
          max_floors: number
          name: string
          reset_day: number | null
          reset_hour: string
          updated_at: string | null
        }[]
      }
      get_team_details_by_short_code: {
        Args: {
          p_short_code: string
        }
        Returns: Json
      }
      is_admin: {
        Args: {
          user_id: string
        }
        Returns: boolean
      }
      reset_towers: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      submit_anomaly_interception_team: {
        Args: {
          p_user_id: string
          p_mode_id: string
          p_boss_id: string
          p_game_version_id: string
          p_comment: string
          p_nikkes: Json
        }
        Returns: {
          team_id: string
        }[]
      }
      submit_interception_team: {
        Args: {
          p_user_id: string
          p_mode_id: string
          p_boss_id: string
          p_game_version_id: string
          p_comment: string
          p_nikkes: Json
        }
        Returns: {
          team_id: string
        }[]
      }
      submit_story_team: {
        Args: {
          p_user_id: string
          p_mode_id: string
          p_chapter_id: string
          p_game_version_id: string
          p_comment: string
          p_nikkes: Json
        }
        Returns: {
          team_id: string
        }[]
      }
      submit_tribe_tower_team: {
        Args: {
          p_user_id: string
          p_tower_id: string
          p_floor: number
          p_game_version_id: string
          p_comment: string
          p_nikkes: Json
        }
        Returns: {
          team_id: string
        }[]
      }
      your_function_name: {
        Args: {
          p_user_id: number
          p_mode_id: number
          p_boss_id: number
          p_comment: string
          p_game_version_id: number
          p_nikkes: Json
        }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
