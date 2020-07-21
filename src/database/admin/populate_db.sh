
export PGPASSWORD='postgres123'

echo " ---> Populating DB:"

echo "Populating tables..."
psql -U postgres postgres < ../queries/sql/populate-example.sql
