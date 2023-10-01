# Makefile

# Use make gen n='name to generation Controller and Service, Dto and Entities 
.PHONY: gen
gen: 
		nest generate resource modules/$(n)