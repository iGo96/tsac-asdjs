function Stack() {
    this.arr = [];
}

Stack.prototype.push = (e) => {this.array.push(e);}
Stack.prototype.pop = () => {return this.array.pop();}
Stack.prototype.peek = () => {return this.array[this.array.length-1];}
Stack.prototype.isEmpty = () => {return this.array.length==0;}


function rpn(s)
{
    var sn = new Stack(); /*num stack*/
    var firstOp = true;
    val = val.split(" "); /**/
    for(var i=0;i<val.length;i++)
    {
        if(val[i]=="+"||val[i]=="-"||val[i]=="*"||val[i]=="/")
        {
            if(firstOp)
            {
                firstOp=false;
                sn.arr.reverse();
            }
            switch(val[i])
            {
                case "+": var sup1 = sn.pop(); var sup2 = sn.pop(); sn.push(sup1+sup2);
                    break;
                case "-": var sup1 = sn.pop(); var sup2 = sn.pop(); sn.push(sup1-sup2);
                    break;
                case "*": var sup1 = sn.pop(); var sup2 = sn.pop(); sn.push(sup1*sup2);
                    break;
                case "/": var sup1 = sn.pop(); var sup2 = sn.pop(); sn.push(sup1/sup2);
                    break;
            }
        }
        else
        {
            sn.push(parseInt(val[i]));
        }
    }
    return sn.pop();
}
