let newsAccordion = document.getElementById('newsAccordion');
        let source = 'the-times-of-india';
        let apiKey = 'pub_8144b6b37b8522ef6c6e77859704c30cdbc1'
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://newsdata.io/api/1/news?apikey=pub_8144b6b37b8522ef6c6e77859704c30cdbc1&language=en,hi&country=in`, true);


// What to do when response is ready
        xhr.onload = function () {
            if (this.status === 200) {
                let json = JSON.parse(this.responseText);
                console.log(json);
                let results=json.results;
                console.log(results);
                let newsHtml="";
                results.forEach(function(element) {
                    let news=`<section>
                            <figure class="card">
                                <article class="article-card">

                                    <div class="article-content">
                                        <a href="#" class="card-category">${element["category"]}</a>
                                        <h3 class="card-title">${element["title"]} </h3>
                                        <p class="card-excerpt">${element["description"]} <a href="${element["link"]}"> Read more</a>
                                        </p>
                                        
                                        <div class="source">${element["source_id"]}</div>
                                    </div>     
                                    <div class="date-card">
                                        <div class="date">${element["pubDate"]}</div>
                                    </div>
                                </article>
                                
                            </figure>
                        </section>`;
                        newsHtml+=news;
                    });
                newsAccordion.innerHTML=newsHtml;
            }
            else {
                console.log("Some error occured")
            }
        }


        xhr.send()
