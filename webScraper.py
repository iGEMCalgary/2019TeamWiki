from bs4 import BeautifulSoup
import requests
import webbrowser
import time




class Parser():	

	##
	#	getSoftLinks:
	#		Returns all populated software wikis links for the year (array)
	#		Note: Year functionality not implemented
	##
	
	def getSoftLinks(self, year):	
		links = []							# All possible software pages
		linksWithSoftware = []		# All populated software pages
		
		# TODO: make year variable - hard coded for testing purposes
		source = requests.get('http://igem.org/Team_Wikis?year=' + year).text
		soup = BeautifulSoup(source, 'lxml')
		content = soup.find('div', id='content_Page')

		for wiki in content.findAll('a'):
			links.append(wiki['href'] + "/Software")

		for i in range(0, len(links), 1):
			wikiSource = requests.get(links[i]).text
			if "There is currently no text in this page." in wikiSource or\
				"In order to be considered for the" in wikiSource or\
				"you must fill this page." in wikiSource or\
				"This page is used by the judges to evaluate your team for the" in wikiSource or\
				"Regardless of the topic, iGEM projects often create or adapt computational tools to move the project forward." in wikiSource:
				pass
			else:
				linksWithSoftware.append(links[i])
		return linksWithSoftware
		
	##
	#	getParagraphs:
	#		Returns first paragraph for each wiki
	##	
		
	def getData(self,year):
		softData = []
		linksWithSoftware = self.getSoftLinks(year)
		counter = 0
		for i in range(0, len(linksWithSoftware), 1):
			softData.append([])
			
			# Extract team name from links
			linkParts = linksWithSoftware[i].split(':')
			teamName = linkParts[2].split('/')
			softData[i].append(teamName[0] + ':')
			
			softwareWikiSource = requests.get(linksWithSoftware[i]).text
			soup = BeautifulSoup(softwareWikiSource, 'lxml')
			## May 30th removing html and css and script tags
			[s.extract() for s in soup('style')]
			[s.extract() for s in soup('script')]
				
			content = soup.find('div', id='bodyContent')
			softData[i].append(content)
			
			# paragraphs = []
			# for para in content.findAll('p'):
				# temp = "".join(line.strip() for line in para.text.split("\n"))
				# if "<style" in str(para) or "</style>" in str(para) or\
						# "<script" in str(para) or "</script>" in str(para) or\
						# len(temp) == 0:
					# pass
				# else:
					# paragraphs.append("".join(line.strip() for line in para.text.split("\n")))
			# finalDescription = ""
			# j = 0
			
			# while len(finalDescription) < 2000 and j < len(paragraphs):
				# k = 0
				# while len(finalDescription) < 2000 and k < len(paragraphs[j]):
					# finalDescription += paragraphs[j][k]
					# k += 1
				# j += 1
			# finalDescription += "..."
			# softData[i].append(finalDescription)
			# counter += 1
			
		return softData
		
		


