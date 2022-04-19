cd backend

# Revert all migrations
condition=true
str='reverted successfully.'
while $condition; do
  res=$(eval 'yarn migration:revert | grep "$str"')

  if [[ "$res" == *"$str"* ]];
  then
    echo $res
  else
    condition=false
    echo 'Nothing to revert!'
  fi
done

# Run all migrations
yarn migration:run

cd ..