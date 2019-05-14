from webScraper import Parser
from fileIO import fileHandler

p = Parser()
html1 = p.getData('2016')

## Writes ONE team's wiki source to file 
# html[i][0]: team name
# html[i][1] : wiki source (not clean)
html = str(html1[1][1])
handler = fileHandler()
handler.writeToFile("scrapedHTML.txt", html)