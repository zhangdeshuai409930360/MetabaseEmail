
cd /data/crontab/sendMetabaseEmail/metabase-mailer/dist
METABASE_BASE_URL="http://1.1.1.1:3000" METABASE_PDF_PATH="/dashboard/4-a3600" METABASE_EMAIL="xxx-dev@xxx.com" METABASE_PASSWORD="anker@2022" METABASE_EMAIL_FROM="xxx-dev@xxx.com" METABASE_EMAIL_PASSWORD="ae23EWF^s892#dfwOEW" METABASE_EMAIL_TO="xxx@xxx.com" METABASE_EMAIL_SUBJECT="My Fancy Report"  METABASE_PDF_NAME="eufydashbroad" node run.js



python3 /data/crontab/sendMetabaseEmail/convertPdf2Png.py --path "/data/crontab/sendMetabaseEmail/images" --file_name eufydashbroad


METABASE_EMAIL_FROM="xxx-dev@xxx.com" METABASE_EMAIL_PASSWORD="ae23EWF^s892#dfwOEW" METABASE_EMAIL_TO="xxx@xxx.com" METABASE_EMAIL_SUBJECT="日报"  METABASE_PDF_NAME="eufydashbroad" node send.js

	


