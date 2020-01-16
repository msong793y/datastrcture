let graph = {
    'a': { 'c': 1, 'b': 7 },
    'b': { 'a': 7, 'd': 12, 'e': 13 },
    'c': { 'a': 1, 'd': 20, 'f': 4 },
    'd': { 'b': 12, 'c': 20, 'e': 5 },
    'e': { 'b': 13, 'd': 5, 'f': 9 },
    'f': { 'c': 4, 'e': 9 }
};

// console.log(graph)



function dijkstras(graph, source){
    let distance = {}
    for (let node in graph){
        distance[node]= Infinity;
    }
    distance[source]=0;

    let unvisited = new Set(Object.keys(graph))
    

}