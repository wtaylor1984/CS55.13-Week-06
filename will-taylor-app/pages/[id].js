import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

// define a getStaticProps() function to have next.js retrieve data to use for the dynamic page
// - this name is defined by next.js
export async function getStaticProps( { params } ) {
  const itemData = await getData(params.id);
  return {
    props: {
      itemData
    }
  };
}

// define a getStaticPaths() function to tell next.js all valid URLs: 1,2,3,4 
// - this name is defined by next.js
export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false
  };
}

// export our dynamically routed page component Entry
export default function Entry( { itemData } ) {
  console.log(itemData.pets );
  //console.log(itemData.pets[0].petName);
  //console.log(itemData[0].name);
  return (
    <Layout>
      <h1>{itemData[0].name}'s Pets</h1>
      
    </Layout>
  );
}

/**
 <ul>
        {itemData.pets.map(
          (pet) => (
          <li key={pet.id}>Pet Name: {pet.petName}</li>
        ))}
      </ul>
 */