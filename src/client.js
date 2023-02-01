import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/", // 서버
  cache: new InMemoryCache(), // 한 번 fetch한 데이터는 캐시에 저장해줌ㄹ
});


// client
//   .query({
//     query: gql`
//       {
//         allMovies {
//           title
//         }
//       }
//     `,
//   })
//   .then((data) => console.log(data));

export default client;
