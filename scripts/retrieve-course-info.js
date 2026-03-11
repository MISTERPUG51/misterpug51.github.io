var courseJsonHttpRequest = new XMLHttpRequest();
        courseJsonHttpRequest.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                courseJsonText = courseJsonHttpRequest.responseText;
                sortTable(1);
            }
        };
        courseJsonHttpRequest.open("GET", "/smm2/courses.json", true);
        courseJsonHttpRequest.send();

        


        function sortTable(sortMethod) {
            //sortMethod values:
            //0 = By course number (ascending)
            //1 = By course number (descending)
            //2 = By date (ascending)
            courseJsonObj = JSON.parse(courseJsonText);
            var numberOfCourses = courseJsonObj.courses.length;
            
            var table = document.createElement("table");

            let tableHeaderRow = document.createElement("tr");
            let headerNameColumn = document.createElement("th");
            let headerIdColumn = document.createElement("th");
            let headerDateColumn = document.createElement("th");
            let headerDescriptionColumn = document.createElement("th");
            let headerImageColumn = document.createElement("th");

            headerNameColumn.textContent = "Name";
            headerIdColumn.textContent = "Course ID";
            headerDateColumn.textContent = "Date (YYYYMMDD)";
            headerDescriptionColumn.textContent = "Description";
            headerImageColumn.textContent = "Image";

            headerNameColumn.setAttribute("class","prgmtable");
            headerIdColumn.setAttribute("class","prgmtable");
            headerDateColumn.setAttribute("class","prgmtable");
            headerDescriptionColumn.setAttribute("class","prgmtable");
            headerImageColumn.setAttribute("class","prgmtable");

            tableHeaderRow.append(headerNameColumn, headerIdColumn, headerDateColumn, headerDescriptionColumn, headerImageColumn);
            table.appendChild(tableHeaderRow);







            if (sortMethod == 0) {
                currentCourseNumber = 0;
                while (currentCourseNumber < numberOfCourses) {
                    table.appendChild(createTableRowForCurrentCourse(currentCourseNumber));
                    currentCourseNumber++;
                }
            } else if (sortMethod == 1) {
                currentCourseNumber = numberOfCourses - 1;
                while (currentCourseNumber > -1) {
                    table.appendChild(createTableRowForCurrentCourse(currentCourseNumber));
                    currentCourseNumber = currentCourseNumber - 1;
                }
            } else if (sortMethod = 2) {
                currentCourseNumber = 0

                //shitty bubble sort code
                swapped = true;
                while (swapped) {
                    swapped = false;
                    while (currentCourseNumber < numberOfCourses - 1) {
                        if (courseJsonObj.courses[currentCourseNumber].name > courseJsonObj.courses[currentCourseNumber + 1].name) {
                            var tempSwapObj1 = courseJsonObj.courses[currentCourseNumber];
                            var tempSwapObj2 = courseJsonObj.courses[currentCourseNumber + 1];
                            courseJsonObj.courses[currentCourseNumber + 1] = tempSwapObj1;
                            courseJsonObj.courses[currentCourseNumber] = tempSwapObj2;
                            swapped = true;
                        }
                        currentCourseNumber++;
                    }
                    
                    currentCourseNumber = 0
                }



                currentCourseNumber = 0;
                while (currentCourseNumber < numberOfCourses) {
                    table.appendChild(createTableRowForCurrentCourse(currentCourseNumber));
                    currentCourseNumber++;
                }

            }
           
            


            table.setAttribute("class", "main-prgmtable prgmtable");
            document.getElementById("courseTableDiv").replaceChildren(table);
            

        }

        function createTableRowForCurrentCourse(currentCourseNumber) {
            let row = document.createElement("tr");
            let nameColumn = document.createElement("td");
            let idColumn = document.createElement("td");
            let dateColumn = document.createElement("td");
            let descriptionColumn = document.createElement("td");
            let imageColumn = document.createElement("td");

            nameColumn.textContent = courseJsonObj.courses[currentCourseNumber].name;
            idColumn.textContent = courseJsonObj.courses[currentCourseNumber].id;
            dateColumn.textContent = courseJsonObj.courses[currentCourseNumber].date;
            descriptionColumn.textContent = courseJsonObj.courses[currentCourseNumber].description;

            imageColumn.setAttribute("width", "25%");
            let courseImageElement = document.createElement("img");
            courseImageElement.setAttribute("src", courseJsonObj.courses[currentCourseNumber].image);
            courseImageElement.setAttribute("style", "height: 100%; width: 100%; object-fit: contain");
            imageColumn.appendChild(courseImageElement);

            nameColumn.setAttribute("class", "prgmtable");
            idColumn.setAttribute("class", "prgmtable");
            dateColumn.setAttribute("class", "prgmtable");
            descriptionColumn.setAttribute("class", "prgmtable");
            imageColumn.setAttribute("class", "prgmtable");

            row.appendChild(nameColumn);
            row.appendChild(idColumn);
            row.appendChild(dateColumn);
            row.appendChild(descriptionColumn);
            row.appendChild(imageColumn);

            return row;  
        }