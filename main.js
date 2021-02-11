const LinkedList = require('./link.js')

function main(){
    const SLL = new LinkedList

    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    console.log(SLL)
    SLL.insertLast('Tauhida')
    SLL.remove('squirrel')

}
main()