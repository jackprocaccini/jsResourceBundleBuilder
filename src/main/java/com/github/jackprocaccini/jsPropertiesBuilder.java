package com.github.jackprocaccini;

import java.io.*;
import java.util.Properties;

public class jsPropertiesBuilder {
    private File jsFile;
    private String language;
    private Properties props;

    /**
     * Builds a properties object based on the .js provided by Paychex
     * @param jsFile The file that you wish to read
     * @throws IOException
     */
    public jsPropertiesBuilder(File jsFile) throws IOException {
        if(!jsFile.getName().endsWith(".js")){
            throw new IOException("Invalid file type. Must be a .js file");
        }
        this.jsFile = jsFile;
        language = jsFile.getName().substring(jsFile.getName().lastIndexOf("-") + 1, jsFile.getName().lastIndexOf("."));
        props = new Properties();
        buildProperties();
    }

    /**
     * Extracts the key and value pairs from each line of the passed .js file.
     * @throws IOException
     */
    private void buildProperties() throws IOException {
        BufferedReader bf = new BufferedReader(new FileReader(jsFile));
        String str;
        while((str = bf.readLine()) != null){
            str = str.trim();
            if(isReadableLine(str)){
                String key = buildKey(str);
                String value = buildValue(str);
                props.setProperty(key, value);
            }
        }
    }

    /**
     * Helper method for buildProperties. Checks to make sure the passed String is a key:value pair.
     * @param str The string you would like to check
     * @return True or false, depending on if this String is considered readable (starts with a single quote)
     */
    private boolean isReadableLine(String str){
        return str.startsWith("'");
    }

    /**
     * Helper method for buildProperties. Builds a key from the given String.
     * @param str This string should be the entire line from the .js file. For example,
     *            str = 'app.time.header': 'Time and Attendance',
     * @return A String which is used as a key value for output. Removes beginning and ending single quotes.
     */
    private String buildKey(String str){
        String temp = str.substring(0, str.indexOf(":"));
        temp = temp.trim();
        String key = temp;
        return key;
    }

    /**
     * Helper method for buildProperties. Builds a value from the given String.
     * @param str This string should be the entire line from the .js file. For example,
     *            str = 'app.time.header': 'Time and Attendance',
     * @return A String which is used as a value value for output. Removes beginning and ending single quotes.
     */
    private String buildValue(String str){
        String temp = str.substring(str.indexOf(":") + 1);
        temp = temp.trim();
        String value;
        if(temp.endsWith(",")){
            value = temp.substring(0, temp.length() - 1);
        } else {
            value = temp;
        }

        return value;
    }

    public String getLanguage() {
        return language;
    }

    public Properties getProps() {
        return props;
    }
}
