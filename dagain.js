let graph = {
    'a': { 'c': 1, 'b': 7 },
    'b': { 'a': 7, 'd': 12, 'e': 13 },
    'c': { 'a': 1, 'd': 20, 'f': 4 },
    'd': { 'b': 12, 'c': 20, 'e': 5 },
    'e': { 'b': 13, 'd': 5, 'f': 9 },
    'f': { 'c': 4, 'e': 9 }
};

// testing graph


const dijkstras = (graph, start)=>{
    let unvisted = new Set( Object.keys(graph));
    let previous = {};
    let distance = {};


    let nodeArr= Object.keys(graphs);

    for(let i=0; i<nodeArr.length; i++){
        distance[nodeArr[i]] = Infinity;
    }
    distance[start]=0;

    while(unvisted.size>0){
        currentNode= findMinNode(unvisted,distance)
        let neighbors= Object.keys(graph[currentNode])

        for(let i=0; i<neighbors.length; i++){
            let neighNode = neighbors[i];


            const distanceFromCN = graph[currentNode][neighNode]+distance[currentNode];
            if(distanceFromCN<distance[neighNode]){
                distance(neighNode)= distanceFromCN;
                previous[neighNode]=currentNode;
            }
        }
        return distance;
    }
}

const findMinNode = (unvisted, distance)=>{
        const nodeArr=Array.from(unvisted)
        if(nodeArr.length===1) return nodeArr[0]

        let smallest=nodeArr[0]
        for(let i=1; i<nodeArr.length;i++){
            smallest=distance[smallest] < distance[nodeArr[i]]? smallest : nodeArr[i]
        }
        return smallest
}

//hmm