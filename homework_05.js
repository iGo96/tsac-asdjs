function QueueItem(){
	this.name;
	this.priority;
	create: function(n,p){this.name=n; this.priority=p;}
}
function Queue(){
	var this.queue = new QueueItem();
}
Queue.prototype.enqueue = function(e) { //accetta come param un QueueItem		
	var index=0;
	var found = false;
	while (index < this.queue.length && !found){
		var item = this.queue[index];
		if(e.priority < item.priority)
			found = true;
		else
			index++;
	}
	this.queue.splice(index,0,e);
}

Queue.prototype.dequeue = function() {
	this.queue.pop();
}
Queue.prototype.size = function() {
	return this.queue.length;
}
Queue.prototype.front = function() {
	return this.queue[this.queue.length - 1];
}
Queue.prototype.isEmpty = function() {
	return this.queue.size() == 0;
}
