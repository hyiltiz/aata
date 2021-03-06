// javascript for "Abstract Algebra: Theory and Applications" website
//   based off same
//   for "First Course in Linear Algebra" website

// <p><img alt="New" src="graphics/rednew.gif"></a> Follow the book on <a href="http://twitter.com/">Twitter</a> @ <a href="http://twitter.com/FCLAbook">FCLAbook</a>.</p>
function news_flash(){
    // Include leading space after rednew graphic
    flash =  '<p><img alt="New" src="graphics/rednew.gif">  <a href="download.html">2016 Annual Edition</a> now available in electronic formats.  Hardcover version now available from Amazon for about $26, see the <a href="purchase.html">Purchase</a> page for details.</p>'
    //'<p><img alt="New" src="graphics/rednew.gif">  <a href="download.html">2016 Annual Edition</a> now available in electronic formats.  Hardcover version to be widely available soon.  ISBN will be <tt>9781944325022</tt>.</p>'
    //'<p><img alt="New" src="graphics/rednew.gif">  New <a href="aata">online edition</a> available.</p> <p><img alt="New" src="graphics/rednew.gif">  <a href="download.html">2015 Annual Edition</a> now available.  Hardcover version now available for about $25, see the <a href="purchase.html">Purchase</a> page for details.</p>'
    //<p><img alt="New" src="graphics/rednew.gif">  <a href="download.html">Snapshot</a> edition now available (2013/02/19)</p>'
    // Comment/uncomment next line to turn off/on
    document.write(flash)
}


function nav_links( thispage ){
    // key, href, text for visible link, boolean to open in new page
    pages = [
        ['index', 'index.html', 'Home', false],
        ['online', 'aata', 'Online', true],
        ['reviews', 'reviews.html', 'Reviews', false],
        ['download', 'download.html', 'Download', false],
        ['purchase', 'purchase.html', 'Purchase', false],
        ['adoption', 'adoption.html', 'Course Adoption', false],
        ['sage', 'sage-aata.html', 'Sage and AATA', false],
        ['fcla', 'http://linear.pugetsound.edu', 'Linear Algebra', true],
        ['contact', 'contact.html', 'Contact', false]
    ]
    document.write('<ul class="navmenu">')
    for (var i = 0; i < pages.length; i++){
        if (thispage == pages[i][0]){
            linkstyle = 'thislink'
            nav_item = '<li class="thislink">' + pages[i][2] + '</li>'
        } else {
            linkstyle = 'hotlink'
            nav_item = '<li class="hotlink"><a href="' + pages[i][1] + '"'
            if (pages[i][3]){
                nav_item = nav_item + ' target=_blank'
            }
            nav_item = nav_item + '">' + pages[i][2] + '</a></li>'
        }
        document.write(nav_item)
    }
    document.write('</ul>')
}

function side_graphics(){
    // SAGE
    sage = ' <div class="sageicon"> <a href="http://sagemath.org" title="SAGE - Open Source Math Software" target=_blank> <img src="graphics/sage_logo_v3_scaled.png" width="120" height="31"></a> </div>'

    // Affordable textbook campaign
    affordable = '<div class="affordable"> <a href="http://www.maketextbooksaffordable.org/statement.asp?id2=37614" title="Open Content Textbooks" target=_blank> <img src="graphics/affordable-campaign.png" width="175" height="175"></a> </div> '

    document.write(sage)
    document.write(affordable)
}
