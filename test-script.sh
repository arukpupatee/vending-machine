echo "Testing Backend"
cd backend
yarn test

echo "Testing App"
cd ../app
yarn test -- --watchAll=false

cd ..