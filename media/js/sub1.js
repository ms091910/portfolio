//h2





//TAB 메뉴
const year = [
  {
    label: "Early",
    i1 : "NICHOLAS V",
    span1 : "(1447-1455)",
    des : "Fra Angelico and Pinturicchio decorate the private apartments of the Popes",
    imgsrc : "history1.jpg",
    info : "Any history of the museums' collections should rightly begin with the history of the rooms that the Popes over the ages chose as places of residence or private prayer and reflection. The first ones, in chronological order, are the Niccoline Chapel and the Borgia Apartment. In the first year of his papacy, Pope Nicholas V (Parentucelli), one of the greatest humanists of the time, called on Fra Angelico to decorate the private chapel of his apartments in the Apostolic Palace with a cycle of frescoes dedicated to St Stephen and St Lawrence. Fra Angelico, a renowned artist as well as a Dominican friar, depicted scenes from the saints' lives, drawn from the 'Acts of the Apostles.' The decorations, richly detailed and full of meaningful allusions, make  the Niccoline Chapel a perfect example of the link between religious and humanistic thought in fifteenth-century painting."
  },
  {
    label: "Middle",
    i1 : "GREGORY XVI",
    span1 : "(1831-1846)",
    des : "The opening of three new museums: the Etruscan, the Egyptian and the Profano Lateranense",
    imgsrc : "history2.jpg",
    info : "Gregory XVI (Cappellari) was considered a reactionary and an obscurantist by the liberal Italian press of the Risorgimento, yet he proved himself to be a well-educated intellectual and a generous patron who took an interest in the artistic trends of his century. The Gregorian Etruscan Museum displays finds from excavations in southern Etruria from 1828 onwards. Among its many masterpieces is the so-called Mars of Todi, the most beautiful and most celebrated bronze sculpture of ancient Italy. Besides the collections already in the Vatican and in the Capitoline Museum, the Gregorian Egyptian Museum contains archaeological findings from various expeditions to Egypt."
  },
  {
    label: "Current",
    i1 : "JOHN PAUL II",
    span1 : "(1978-2005)",
    des : "From major restoration of the Sistine Chapel to the Jubilee of the Year 2000",
    imgsrc : "history3.jpg",
    info : "A full restoration of the Sistine Chapel was carried out during John Paul II's papacy. The work began in 1979 and lasted more than three decades. Pope John Paul II celebrated the completion of this 'magna impresa' with a solemn mass on 8 April 1994. The final phase of restoration that followed involved only the artwork not completed by Michelangelo. Among the works of art that adorn the space, the massive Polychrome Mosaic is a stand-out, dating from the first century BCE, with a spectacular head of Medusa at the centre. In 1984 UNESCO placed Vatican City and the Vatican Museums on the list of World Heritage Sites in recognition of the exceptional artistic value of the collections gathered by the Popes."
  }
];



$('#tabTop li i').html(year[0].i1);
$('#tabTop li span').html(year[0].span1);
$('#tabTop p').html(year[0].des);
$('#tabTop img').html(year[0].imgsrc);
$('#tabBottom p').html(year[0].info)

$('#btnGroup ul li a').click(function(e){
  e.preventDefault();

  $('.btn_group li').removeClass('active');
  $(this).parent('li').addClass('active')

  var ind = $(this).index('#btnGroup ul li a');

  $('#tabTop li i').fadeOut(200, function(){
    $(this).html(year[ind].i1).fadeIn(300);
  });

  $('#tabTop li span').fadeOut(200, function(){
    $(this).html(year[ind].span1).fadeIn(300);
  });

   $('#tabTop p').fadeOut(200, function(){
    $(this).html(year[ind].des).fadeIn(300);
  });

   $('#tabBottom p').fadeOut(200, function(){
    $(this).html(year[ind].info).fadeIn(300);
  });
  
  $('#tabTop img').attr('src','./images/sub1/'+year[ind].imgsrc);
});
