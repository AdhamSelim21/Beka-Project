import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "portfolio" RENAME TO "portfolios";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "portfolio_id" TO "portfolios_id";
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_portfolio_fk";
  
  DROP INDEX "portfolio_updated_at_idx";
  DROP INDEX "portfolio_created_at_idx";
  DROP INDEX "payload_locked_documents_rels_portfolio_id_idx";
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_portfolios_fk" FOREIGN KEY ("portfolios_id") REFERENCES "public"."portfolios"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "portfolios_updated_at_idx" ON "portfolios" USING btree ("updated_at");
  CREATE INDEX "portfolios_created_at_idx" ON "portfolios" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_portfolios_id_idx" ON "payload_locked_documents_rels" USING btree ("portfolios_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "portfolios" RENAME TO "portfolio";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "portfolios_id" TO "portfolio_id";
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_portfolios_fk";
  
  DROP INDEX "portfolios_updated_at_idx";
  DROP INDEX "portfolios_created_at_idx";
  DROP INDEX "payload_locked_documents_rels_portfolios_id_idx";
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_portfolio_fk" FOREIGN KEY ("portfolio_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "portfolio_updated_at_idx" ON "portfolio" USING btree ("updated_at");
  CREATE INDEX "portfolio_created_at_idx" ON "portfolio" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_portfolio_id_idx" ON "payload_locked_documents_rels" USING btree ("portfolio_id");`)
}
