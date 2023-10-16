const fs=require('fs')

exports.readfile=(filepath,callback)=>{
    fs.readFile(filepath,(err,filedata)=>{
        let dataarray=null;
        if (!err && filedata.length>0) {
            dataarray=JSON.parse(filedata);
            return callback(dataarray)
        }
        return callback(dataarray)
    })
}

exports.writefile=(filepath,dataobject)=>{
    this.readfile(filepath,(dataarray)=>{
        let data=[];
        if (dataarray) {
            let data=dataarray;
            data.push(dataobject);
            fs.writeFile(filepath,JSON.stringify(data),(err)=>{
                if (err) {
                    console.log(err)
                }
                else{
                    console.log("Data Successfuly saved")
                }
            })

        }
        else{
            data.push(dataobject)
            fs.writeFile(filepath,JSON.stringify(data),(err)=>{
                if (err) {
                    console.log(err)
                }
                else{
                    return true;
                    console.log("Data Successfuly saved")
                }
            })
        }
    })
}