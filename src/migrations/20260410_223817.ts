import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "portfolio" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"description" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "portfolio_id" integer;
  CREATE INDEX "portfolio_updated_at_idx" ON "portfolio" USING btree ("updated_at");
  CREATE INDEX "portfolio_created_at_idx" ON "portfolio" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_portfolio_fk" FOREIGN KEY ("portfolio_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_portfolio_id_idx" ON "payload_locked_documents_rels" USING btree ("portfolio_id");
  ALTER TABLE "media" DROP COLUMN "_key";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "portfolio" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "portfolio" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_portfolio_fk";
  
  DROP INDEX "payload_locked_documents_rels_portfolio_id_idx";
  ALTER TABLE "media" ADD COLUMN "_key" varchar;
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "portfolio_id";`)
}
