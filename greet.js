function greet(name){

    if(name == null) { 
        return 'Hello, my friend.'
    }
    else if(Array.isArray(name)) {
        if(name.length > 2) {
            var getUpper
            var listwithOutUpper = name.filter(function(name) {
                if(name == name.toUpperCase()) {
                    getUpper = name
                }   
                return name != name.toUpperCase()}).join(" and ")

            if(getUpper != undefined) {
                return `Hello, ${listwithOutUpper}. AND HELLO ${getUpper}!`
            }

            else {
                var nmfirst = name.slice(0,2).join(", ")+","
                var nmlast = name.slice(2,3)
                return `Hello, ${nmfirst} and ${nmlast}.`
            }
        }

        else  {
            if(name.join(" ").includes("\"")) {
                var s = name.filter(name => name.includes(", "))+""
                var getText
                name.forEach(function cutInList(textName, index) {
                    if(s == textName) {
                        getText = name.splice(name[index],1)
                    }
                })
                return `Hello, ${getText} and ${s.replace(/['"]+/g,"")}.`
            }

            else if(name.join(" ").includes(", ")) {
                var s = name.filter(name => name.includes(", "))+""
                var getText
                name.forEach(function cutInList(textName, index) {
                    if(s == textName) {
                        getText = name.splice(name[index],1)
                    }
                })
                return `Hello, ${getText}, ${s.replace(",",", and")}.`
            }

            else {
                var nm = name.join(" and ")
                return `Hello, ${nm}.`
            }
        }
    }
    else if(name == name.toUpperCase()) {
        return `HELLO ${name}!`
    }
    return `Hello, ${name}.`

}
module.exports = greet;