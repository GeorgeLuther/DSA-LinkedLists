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
    SLL.insertBefore('Boomer', 'Athena')
    console.log(SLL.find('Athena'))
    SLL.insertAfter('Helo', 'Hotdog')
    SLL.insertAt(2, 'Kat')
    SLL.remove('Tauhida')
}
main()
