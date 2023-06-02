const btn = document.querySelector('#btn')
const wrap = document.querySelector('.wrapper')



btn.addEventListener('click' , () => {
    fetch('data.json')
        .then(atai => atai.json())
        .then(data => {data.forEach( item => {
            const div = document.createElement('div')
            let discountedPrice = (item.price * 10)
            div.innerHTML =
                `<div>
                <div class="img">
                    <img src="${item.img}" alt="" style="width: 80%;">
                    <div class="img_inner">
                    <span class="span_price">-90%</span>
                    </div>
                </div>
                   <span class="span">${item.price}</span>
                   <span class="span_2">  ${discountedPrice}
                        <div class="border_span"></div>
                   </span>                                                    
            </div>`
            wrap.append(div)
        })
    })
})

