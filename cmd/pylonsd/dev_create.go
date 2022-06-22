package main

import (
	"strconv"

	"github.com/spf13/cobra"
	"github.com/tendermint/tendermint/libs/json"

	"github.com/Pylons-tech/pylons/x/pylons/client/cli"
	"github.com/Pylons-tech/pylons/x/pylons/types"
)

func CmdDevCreate() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create [account] [path]",
		Short: "Creates and executes creation transactions Pylons recipe or cookbook files in the provided path, using credentials of provided account",
		Args:  cobra.ExactArgs(2),
		Run: func(cmd *cobra.Command, args []string) {
			accountName := args[0]
			path := args[1]
			ForFiles(path, func(path string, cb types.Cookbook) {
				c := cli.CmdCreateCookbook()
				c.SetArgs([]string{cb.Id, cb.Name, cb.Description, cb.Developer, cb.Version, cb.SupportEmail, strconv.FormatBool(cb.Enabled)})
				c.Flags().Set("from", accountName)
				c.Execute()
			}, func(path string, rcp types.Recipe) {
				c := cli.CmdCreateRecipe()
				coinInputJSON, err := json.Marshal(rcp.CoinInputs)
				if err != nil {
					panic(err)
				}

				itemInputJSON, err := json.Marshal(rcp.ItemInputs)
				if err != nil {
					panic(err)
				}

				outputJSON, err := json.Marshal(rcp.Outputs)
				if err != nil {
					panic(err)
				}

				c.SetArgs([]string{
					rcp.CookbookId, rcp.Id, rcp.Name, rcp.Description, rcp.Version,
					string(coinInputJSON), string(itemInputJSON), rcp.Entries.String(), string(outputJSON), strconv.FormatInt(rcp.BlockInterval, 10),
					rcp.CostPerBlock.String(), rcp.ExtraInfo,
				})
				c.Flags().Set("from", accountName)
				c.Execute()
			})
		},
	}
	return cmd
}
