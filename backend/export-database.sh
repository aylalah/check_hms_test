#!/bin/bash

# Config file
SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do
	DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
	SOURCE="$( readlink "$SOURCE" )"
	[[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE"
done

CONFIG=${DIR%/*/*/*}

# Import config settings
source ".env"

# Local config
LOCAL_DATABASE_HOST=$DB_HOST
LOCAL_DATABASE_NAME=$DB_DATABASE
LOCAL_DATABASE_USER=$DB_USERNAME
LOCAL_DATABASE_PASS=$DB_PASSWORD

# Current timestamp
CURRENT_TIME=$(date "+%Y.%m.%d-%H.%M.%S")

# Create directory to store dumps
mkdir -p backups
mkdir -p backupload

echo Backing up local database: $LOCAL_DATABASE_NAME
mysqldump -v -h $LOCAL_DATABASE_HOST -u $LOCAL_DATABASE_USER -p$LOCAL_DATABASE_PASS $LOCAL_DATABASE_NAME > backups/local-database-$CURRENT_TIME.sql

mysqldump -v -h $LOCAL_DATABASE_HOST -u $LOCAL_DATABASE_USER -p$LOCAL_DATABASE_PASS $LOCAL_DATABASE_NAME > backupload/buth_pharmacy.sql

echo Database backedup and ready for remote syncronization

