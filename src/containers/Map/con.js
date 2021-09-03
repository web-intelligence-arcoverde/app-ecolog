{/* Carrega os ícones de reciclagem que irão ser coletados pelo usuário/empresa logado */}
        {tipoConta === "coletor" &&
          pontos.map((ponto, index) => {
            if (ponto.status === "aguardando" && ponto.coletor === uid) {
              return (
                <MapView.Marker
                  key={index}
                  coordinate={ponto.latlng}
                  title="Aguardando Coleta"
                  description={`Você já pode buscar esta coleta para o dia ${
                    ponto.data
                  }`}
                  // onPress={() => setItemParaColeta(ponto)}
                >
                  <Image
                    source={Rec}
                    style={{
                      width: 42,
                      height: 42
                    }}
                  />
                </MapView.Marker>
              );
            }
          })}

        {// Carrega os ícones de reciclagem para usuários com intuito de cada tipo
        tipoConta === "descartador" &&
          pontos.map((ponto, index) => {
            if (ponto.usuario === auth.uid && !ponto.coletado) {
              return (
                <Marker
                  key={index}
                  coordinate={ponto.latlng}
                  title="Coleta Descartador"
                  description={ponto.usuario}
                >
                  {/* <MapView.Callout onPress={() => Alert.alert("Vai ", "Testando")} /> */}
                  <Image
                    source={Rec}
                    style={{
                      width: 32,
                      height: 32
                    }}
                  />
                </Marker>
              );
            }
          })}
        {isAddVisible && (
          <Marker
            coordinate={atualMarker}
            title="Coleta Nova"
            description="Clique em Reciclar para adicionar esta coleta"
            draggable={true}
          >
            <Image
              source={Rec}
              style={{
                width: 42,
                height: 42
              }}
            />
          </Marker>
        )}
 {tipoConta === "coletor" && (
        <View style={styles.btnAdd}>
          {itemParaColeta && (
            <Button
              title="Coletar"
              onPress={() => {
                coletarItemSelecionado();
              }}
            />
          )}
        </View>
      )}
      {tipoConta === "descartador" && (
        <View style={styles.btnAdd}>
          {!addColeta && (
            <Button
              title="Adicionar"
              onPress={() => {
                setAddColeta(true);
              }}
            />
          )}
          {addColeta && (
            <Button
              title="Visualizar"
              onPress={() => {
                setAddColeta(false);
                setIsVisible(false);
              }}
            />
          )}
          {isAddVisible && <Button title="Reciclar" onPress={reciclar} />}
        </View>
      )}
      <CreateDescart />
      
       {tipoConta === "coletor" &&
          pontos.map((ponto, index) => {
            if (ponto.status === "pendente") {
              return (
                <MapView.Marker
                  key={index}
                  coordinate={ponto.latlng}
                  title="Coleta pendente"
                  description={`Coleta para o dia ${ponto.data}`}
                  onPress={() => setItemParaColeta(ponto)}
                >
                  <Image
                    source={Rec}
                    style={{
                      width: 42,
                      height: 42
                    }}
                  />
                </MapView.Marker>
              );
            }
          })}

*/