##
#				Created May 31st 2018 for Python 3
##

class fileHandler():
	
	def writeToFile(fileHandler, fileName, content):
		with open(fileName, 'w+', encoding='utf8') as textFile:
			textFile.write(content)
			textFile.close()
			
	def readFromFile(fileHandler, fileName):
		file = open(fileName, "r", encoding='utf8')
		content = file.read()
		file.close()
		return content
	