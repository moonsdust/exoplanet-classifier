export default function Header() {
    return (
        <header>
            <h1>Which exoplanet type formed from k-means clustering is most likely to scatter bodies found in their planetary system? What is its implication?</h1>
            <p>Our objective was to observe the relationship between the type of exoplanet and its Safronov number. Additionally, we wanted to determine the capabilities and implications of certain types of exoplanets ejecting planets out of their planetary system. All confirmed exoplanets from the NASA Exoplanet Archive were grouped into clusters using the k-means clustering algorithm. Following this, each exoplanet's Safronov number and the mean Safronov number for each type were calculated.
            </p>
            <h2>Results</h2>
            <p> From k-means clustering, we discovered 3 potential subtypes of Gas Giants: Type 1: Jupiter-like, Type 2, and Type 3. Gas Giant Type 2 exoplanets (and Gas giants overall) have higher capabilities to scatter bodies in their planetary system compared to other types based on their Safronov number. This can lead to the exoplanets ejecting planets out of their planetary system and result in rogue planets, which are hard to detect. A question to further delve into is what other properties of Gas Giant Type 2 exoplanets make them more capable of scattering.</p>
            <p>The scatterplot below is an interactive form of the data visualization created from the original notebook exploring the data. The original notebook can be found <a href = "https://github.com/moonsdust/exoplanets/blob/main/Exoplanets_Notebook.ipynb" target = "_blank">here</a>. Curious about the technologies used for this dashboard? Go <a href ="https://github.com/moonsdust/exoplanets/tree/main" target = "_blank">here</a>.</p>
        </header>
    )
}