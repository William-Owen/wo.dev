import json

with open('skills.json') as f:
	data = json.load(f)

for skillItem in data["skills"]:
	f= open("./src/data/skills/%s.md" % skillItem["name"],"w+")
	f.write("---\r\n")
	f.write("title: %s\r\n" % skillItem["name"])
	f.write("icon: %s\r\n" % skillItem["icon"])
	if "type" in skillItem:
		f.write("type:\r\n")
		for singleType in skillItem["type"]:
			f.write(" - %s\r\n" % singleType)
	f.write("yearsExperience: 20+\r\n")
	f.write("alsoSee:\r\n")
	f.write("---\r\n\r\n")
	f.write("Content pending\r\n")
	f.close()

