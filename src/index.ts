import config from "./configs/config.js"
import client from "./configs/opensearch-configs.js"

console.log(atob(config.osPassword))

var index_name = "books";

var settings = {
  settings: {
    index: {
      number_of_shards: 4,
      number_of_replicas: 3,
    },
  },
};

async function createIndex() {
    var response = await client.indices.create({
        index: index_name,
        body: settings,
      });
    console.log(response)
}

createIndex

