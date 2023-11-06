
let draggableDiv
let si
let word
function render(wordp, dir) {
  try {

    let left
    let top
    if (draggableDiv) {
      left = draggableDiv.style.left
      top = draggableDiv.style.top
      document.body.removeChild(draggableDiv)
    }
     word = getWord(wordp, dir)
    draggableDiv = document.createElement('div');
    if (top != null) draggableDiv.style.top = top
    if (left != null) draggableDiv.style.left = left
    var isDragging = false;
    var offsetX, offsetY;

    draggableDiv.addEventListener('mouseenter', () => {
      // 停止定时器
      if (si) clearInterval(si)
    });


    draggableDiv.addEventListener('mouseleave', () => {
      // 重新启动定时器
      // if (!si)
      si = setInterval(render, 1000 * 60)
    });


    const span1 = document.createElement('span')
    const txtnode = document.createTextNode(word.word)
    span1.appendChild(txtnode)
    span1.classList.add('word');
    draggableDiv.appendChild(span1)


    // const div10 = document.createElement('div');
    const span2 = document.createElement('span')
    const txtnode1 = document.createTextNode(word.soundmark)
    span2.appendChild(txtnode1)
    span2.classList.add('word1');
    span2.style.marginRight = "10px"
    draggableDiv.appendChild(span2)

    // div10.appendChild(span33)

    // draggableDiv.appendChild(div10)



    const div3 = document.createElement('div');
    const txtnode5 = document.createTextNode(word.eg)
    div3.classList.add('word1');

    div3.appendChild(txtnode5)
    draggableDiv.appendChild(div3)

    const div4 = document.createElement('div');
    const txtnode6 = document.createTextNode(word.egzh)
    div4.classList.add('word1');
    div4.setAttribute('name','zh-cn')
    div4.style.display = 'none'
    div4.appendChild(txtnode6)
    draggableDiv.appendChild(div4)


    const div2 = document.createElement('div');
    const txtnode4 = document.createTextNode(word.feat + ' ' + word.zh)
    div2.appendChild(txtnode4)
    div2.style.textAlign = 'right'
    div2.style.display = 'none'
    div2.classList.add('word1');
    div2.setAttribute('name','zh-cn')
    draggableDiv.appendChild(div2)

    const div1 = document.createElement('div');
    div1.style.textAlign = 'center'

    const span3 = document.createElement('span')
    const txtnode2 = document.createTextNode('<')
    span3.appendChild(txtnode2)
    span3.style.marginRight = '20px'
    span3.classList.add('btn', 'word1');
    div1.appendChild(span3)



    const span4 = document.createElement('span')
    const txtnode3 = document.createTextNode('>')
    span4.appendChild(txtnode3)
    span4.style.marginRight = '20px'
    span4.classList.add('btn', 'word1');
    div1.appendChild(span4)

    const span5 = document.createElement('span')
    const txtnode11 = document.createTextNode('……')
    span5.appendChild(txtnode11)
    span5.classList.add('btn', 'word1');

    span5.addEventListener('click', function () {
      div4.style.display = 'block'
      div2.style.display = 'block'
    })

    div1.appendChild(span5)



    span4.addEventListener('click', function (e) {
      render(word.word, 1)
      clearInterval(si)
      si = setInterval(render, 1000 * 60)
    });
    span3.addEventListener('click', function (e) {
      render(word.word, -1)
      clearInterval(si)
      si = setInterval(render, 1000 * 60)
    });

    draggableDiv.appendChild(div1)


    draggableDiv.classList.add('favicon-overlay', 'custom-button');




    document.body.appendChild(draggableDiv);
    document.body.style.marginBottom = "30px"



    draggableDiv.addEventListener('mousedown', function (e) {
      isDragging = true;
      offsetX = e.clientX - draggableDiv.getBoundingClientRect().left;
      offsetY = e.clientY - draggableDiv.getBoundingClientRect().top;
    });

    // 鼠标移动时更新元素位置
    document.addEventListener('mousemove', function (e) {
      if (isDragging) {
        var x = e.clientX - offsetX;
        var y = e.clientY - offsetY;
        draggableDiv.style.left = x + 'px';
        draggableDiv.style.top = y + 'px';
      }
    });

    // 鼠标释放时停止拖拽
    document.addEventListener('mouseup', function () {
      isDragging = false;
    });



    return draggableDiv
  } catch (e) {
    console.error(e)
  }

  return null

}

render()


si = setInterval(render, 1000 * 60)

const element = document.documentElement;

// 添加keydown事件监听器
element.addEventListener("keydown", function (event) {
  // 检查按下的键的keyCode或key属性
  if (event.key === "a" || event.keyCode === 65) {
    // 处理A键按下事件
    render(word.word, -1)
    clearInterval(si)
    si = setInterval(render, 1000 * 60)
  } else if (event.key === "d" || event.keyCode === 68) {
    // 处理D键按下事件
    render(word.word, 1)
    clearInterval(si)
    si = setInterval(render, 1000 * 60)
  } else if (event.key === "w" || event.keyCode === 87) {

    document.getElementsByName('zh-cn').forEach(item => {
      item.style.display = 'block'
    })
    // render(word.word, -1)
    // clearInterval(si)
    // si = setInterval(render, 1000 * 60)
  }

});
