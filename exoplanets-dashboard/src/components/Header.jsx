export default function Header() {
    return (
        <header>
            <h1>Which exoplanet type formed from k-means clustering is most likely to scatter bodies found in their planetary system? What is its implication?</h1>
            <p>We want to observe the relationship between the type of exoplanet and its Safronov number and determine the capabilities and implications of certain types of exoplanets ejecting planets out of their planetary system. All confirmed exoplanets were grouped into clusters from the NASA Exoplanet Archive using the k-means clustering algorithm. 
                Using this information, each exoplanets' Safronov number was calculated and then the mean Safronov number was calculated for each type.
            </p>
            <h2>Results</h2>
            <p>Gas Giant Type 2 exoplanets (and Gas giants overall) have higher capabilities to scatter bodies in their planetary system compared to other types based of its Safronov number. This can lead to the exoplanets ejecting planets out of their plantery system and result in rogue planets, which are hard to detect. A question to further delve into is what other property of Gas Giant Type 2 exoplanets makes them more capable of scattering.</p>
            <p>The scatterplot below is an interactive form of the data visualization created from the original notebook exploring the data provided by NASA Exoplanet Archive. The original notebook can be found <a href = "https://github.com/moonsdust/exoplanets/blob/main/Exoplanets_Notebook.ipynb" target = "_blank">here</a>. Curious about the technologies used for this dashboard? Go <a href ="https://github.com/moonsdust/exoplanets/tree/main" target = "_blank">here</a>.</p>
        </header>
    )
}