import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "padels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "padels_id" integer;
  ALTER TABLE "padels" ADD CONSTRAINT "padels_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "padels_image_idx" ON "padels" USING btree ("image_id");
  CREATE INDEX "padels_updated_at_idx" ON "padels" USING btree ("updated_at");
  CREATE INDEX "padels_created_at_idx" ON "padels" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_padels_fk" FOREIGN KEY ("padels_id") REFERENCES "public"."padels"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_padels_id_idx" ON "payload_locked_documents_rels" USING btree ("padels_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "padels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "padels" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_padels_fk";
  
  DROP INDEX "payload_locked_documents_rels_padels_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "padels_id";`)
}
