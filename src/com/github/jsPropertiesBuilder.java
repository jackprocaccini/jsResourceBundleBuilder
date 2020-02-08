package com.github;

import java.io.*;
import java.util.Locale;

public class jsPropertiesBuilder {
    private File jsFile;
    private File outputFile;
    private Locale locale;
    private String bundleName;
    private static PrintWriter writer;

    /**
     * Used to build Resource Bundles from a given JavaScript file.
     * @param jsPathName String. The path to the JavaScript file that you would like to parse.
     *                   For example, a valid jsPathName would look something like this - "C:/Users/Jack/Desktop/time-en.js
     * @param bundleName String. What you want your resource bundles to be named. The locale you pass in will be
     *                   appended to the end of this String. For example, Oracle's tutorial calls their bundles "MessageBundles,"
     *                   while we are calling our bundles "ResourceBundles"
     * @param locale Locale. The locale of your bundle. Gets appended to the end of bundleName in order to form a
     *               .properties file in the style [bundleName]_[locale-language]_[locale-country].properties
     * @param outputDirectory String. Where you would like to place your .properties file. Note, this is looking for a
     *                        directory in which to output the .properties file. A valid output directory could be
     *                        something like - "C:/Users/Jack/Desktop/"
     * @throws IOException
     */
    public jsPropertiesBuilder(String jsPathName, String bundleName, Locale locale, String outputDirectory) throws IOException {
        jsFile = new File(jsPathName);
        this.locale = locale;
        this.bundleName = bundleName + "_";
        outputFile = new File(outputDirectory + this.bundleName + this.locale.toString() + ".properties");
        writer = new PrintWriter(outputFile);
        buildProperties();
        //just adding an extra comment to see how git integration works
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
                writer.println(key + " = " + value);
            }
        }
        writer.close();
    }

    /**
     * Helper method for buildProperties. Checks to make sure the passed String is a key:value pair.
     * @param str The string you would like to check
     * @return True or false, depending on if this String is considered readable (meaning that the string doesn't start
     * with a comment character, empty lines, "define," or semicolons
     */
    private boolean isReadableLine(String str){
        return !(str.length() == 1 || str.startsWith("/*") || str.startsWith("*") || str.startsWith("*/")
                || str.startsWith("//") || str.contains("define") || str.contains("});") || str.equals(""));
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
        String key = temp.substring(1, temp.length() - 1);
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
            value = temp.substring(1, temp.length() - 2);
        } else {
            value = temp.substring(1, temp.length() - 1);
        }
        //This line removes the back slashes from the value
//        value = value.replaceAll("\\\\", "");

        return value;
    }


}
