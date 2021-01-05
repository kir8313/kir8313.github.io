const IMG1 = [ '/img/icons/course/hover/1.png', '/img/icons/course/1.png', '/img/img/top/hover/1.png','/img/img/top/1.png'],
      IMG2 = [ '/img/icons/course/hover/2.png', '/img/icons/course/2.png', '/img/img/top/hover/2.png','/img/img/top/2.png'],
      IMG3 = [ '/img/icons/course/hover/3.png', '/img/icons/course/3.png', '/img/img/top/hover/3.png','/img/img/top/3.png'],
      IMG4 = [ '/img/icons/course/hover/4.png', '/img/icons/course/4.png', '/img/img/top/hover/4.png','/img/img/top/4.png'],
      IMG5 = [ '/img/icons/course/hover/5.png', '/img/icons/course/5.png', '/img/img/top/hover/5.png','/img/img/top/5.png'],
      IMG6 = [ '/img/icons/course/hover/6.png', '/img/icons/course/6.png', '/img/img/top/hover/6.png','/img/img/top/6.png'],
      IMG7 = [ '/img/icons/course/hover/7.png', '/img/icons/course/7.png', '/img/img/top/hover/7.png','/img/img/top/7.png'],
      IMG8 = [ '/img/icons/course/hover/8.png', '/img/icons/course/8.png', '/img/img/top/hover/8.png','/img/img/top/8.png'],
      IMG9 = [ '/img/icons/course/hover/9.png', '/img/icons/course/9.png', '/img/img/top/hover/9.png','/img/img/top/9.png'],
      IMG10 = [ '/img/icons/course/hover/10.png', '/img/icons/course/10.png', '/img/img/top/hover/10.png','/img/img/top/10.png'],
      IMG11 = [ '/img/icons/course/hover/11.png', '/img/icons/course/11.png', '/img/img/top/hover/11.png','/img/img/top/11.png'],
      IMG12 = [ '/img/icons/course/hover/12.png', '/img/icons/course/12.png', '/img/img/top/hover/12.png','/img/img/top/12.png']

function course_Hover(block,image,way) {
    document.querySelector(block).addEventListener('mouseover', () => {
        document.querySelector(block).classList.add('block-hover')
        document.querySelector(image).src = way[0]
    })
    document.querySelector(block).addEventListener('mouseleave', () => {
        document.querySelector(block).classList.remove('block-hover')
        document.querySelector(image).src = way[1]
    })
}
function courseActiveHover() {
    course_Hover('.course_block1', '.course_img1', IMG1),
    course_Hover('.course_block2', '.course_img2', IMG2)
    course_Hover('.course_block3', '.course_img3', IMG3),
    course_Hover('.course_block4', '.course_img4', IMG4),
    course_Hover('.course_block5', '.course_img5', IMG5),
    course_Hover('.course_block6', '.course_img6', IMG6),
    course_Hover('.course_block7', '.course_img7', IMG7),
    course_Hover('.course_block8', '.course_img8', IMG8),
    course_Hover('.course_block9', '.course_img9', IMG9),
    course_Hover('.course_block10', '.course_img10', IMG10),
    course_Hover('.course_block11', '.course_img11', IMG11),
    course_Hover('.course_block12', '.course_img12', IMG12)
}
courseActiveHover()

function top_hover(image,way) {
    document.querySelector(image).addEventListener('mouseover', () => {
        document.querySelector(image).src = way[2]
    })
    document.querySelector(image).addEventListener('mouseleave', () => {
        document.querySelector(image).src = way[3]
    })
}
function topActiveHover () {
    top_hover('.top_img1', IMG1),
    top_hover('.top_img2', IMG2),
    top_hover('.top_img3', IMG3),
    top_hover('.top_img4', IMG4),
    top_hover('.top_img5', IMG5),
    top_hover('.top_img6', IMG6)
}
topActiveHover ()                                        
