export function TaskQueue(){
    var collection = [];
    
    this.print = function(){
      console.log('Queue:', collection);
    };
    
    this.enqueue = function(element){
      if(this.isEmpty()){
        collection.push(element);
      }
      else{
        let added = false;
      
        for(let i=0; i<collection.length; i++){
          if(element.priority > collection[i].priority){
            collection.splice(i,0,element);
            added = true;
            break;
          }if(element.priority === collection[i].priority){
              if(element.dueDate.getTime() < collection[i].dueDate.getTime()){
                collection.splice(i,0,element);
                added = true;
                break;
              }
          }
        }      
        if(!added){
          collection.push(element);
        }      
      }        
    };   
  
    this.dequeue = function(){
      return collection.shift();
    };
    
    this.front = function(){
      return collection[0];
    };
    
    this.size = function(){
      return collection.length;
    };
    
    this.isEmpty = function(){
      return(collection.length === 0);
    };  
  };