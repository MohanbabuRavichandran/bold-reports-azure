ALTER TABLE BOLDTC_TenantInfo ADD AdditionalParameters varchar(1026) NULL;

ALTER TABLE BOLDTC_TenantInfo ADD ImDbAdditionalParameters varchar(1026) NULL;

ALTER TABLE  BOLDTC_AuthSettings ALTER COLUMN Settings Type varchar(4000);